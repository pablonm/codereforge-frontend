import React from 'react'
import PropTypes from 'prop-types'
import { Title, NoRefactorings } from './RefactoringsStyles'
import Refactoring from './Refactoring/Refactoring'

const Refactorings = ({ refactorings, user }) => {
  const sort = refs => {
    return refs.sort((a, b) => {
      if (a.score > b.score) return -1
      if (a.score < b.score) return 1
      const aDate = new Date(a.created_at)
      const bDate = new Date(b.created_at)
      if (aDate.getTime() < bDate.getTime()) return -1
      if (aDate.getTime() > bDate.getTime()) return 1
      return 0
    })
  }

  return (
    <div>
      <Title>Refactorings</Title>
      {refactorings.length > 0 ? (
        sort(refactorings).map(refactoring => (
          <Refactoring key={refactoring._id} refactoring={refactoring} user={user} />
        ))
      ) : (
        <NoRefactorings>No refactorings yet</NoRefactorings>
      )}
    </div>
  )
}

const authorShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string,
})

Refactorings.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  refactorings: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: authorShape,
      description: PropTypes.string.isRequired,
      code_files: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
          language: PropTypes.string.isRequired,
        })
      ),
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          content: PropTypes.string,
          author: authorShape,
          parent: PropTypes.string,
          created_at: PropTypes.string,
        })
      ),
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Refactorings.defaultProps = {
  user: null,
}

export default Refactorings
