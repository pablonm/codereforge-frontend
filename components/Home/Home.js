import React, { Component } from 'react'
import { Row, Col, Radio } from 'antd'
import PostList from 'Common/PostList/PostList'
import Layout from 'Common/Layout/Layout'
import { RadioButton, Tags, TopFilters } from './HomeStyles'
import TagFilter from './TagFilter/TagFilter'

class Home extends Component {
  state = {
    filter: 'new',
    selectedTags: [],
  }

  filterChangeHandler = e => {
    this.setState({ filter: e.target.value })
  }

  tagsFilterChangeHandler = selectedTags => {
    this.setState({ selectedTags })
  }

  calculatePopularity = post => {
    return (
      post.comments.length + post.refactorings.reduce((sum, elem) => sum + elem.comments.length, 0)
    )
  }

  filterAndSortPosts = () => {
    const { selectedTags, filter } = this.state
    const { posts } = this.props
    const filteredPosts =
      selectedTags.length > 0
        ? posts.filter(post =>
            selectedTags.every(selected => post.tags.some(tag => selected._id === tag._id))
          )
        : posts
    switch (filter) {
      case 'new':
        return [...filteredPosts].sort((a, b) => {
          const aDate = new Date(a.created_at)
          const bDate = new Date(b.created_at)
          if (aDate.getTime() > bDate.getTime()) return -1
          if (aDate.getTime() < bDate.getTime()) return 1
          return 0
        })
      case 'notrefactored':
        return [...filteredPosts].sort((a, b) => {
          if (a.refactorings.length > b.refactorings.length) return 1
          if (a.refactorings.length < b.refactorings.length) return -1
          const aDate = new Date(a.created_at)
          const bDate = new Date(b.created_at)
          if (aDate.getTime() > bDate.getTime()) return -1
          if (aDate.getTime() < bDate.getTime()) return 1
          return 0
        })
      case 'popular':
        return [...filteredPosts].sort((a, b) => {
          if (this.calculatePopularity(a) > this.calculatePopularity(b)) return -1
          if (this.calculatePopularity(a) < this.calculatePopularity(b)) return 1
          const aDate = new Date(a.created_at)
          const bDate = new Date(b.created_at)
          if (aDate.getTime() > bDate.getTime()) return -1
          if (aDate.getTime() < bDate.getTime()) return 1
          return 0
        })
      default:
        return filteredPosts
    }
  }

  render() {
    const { tags } = this.props
    return (
      <Layout
        title="CodeReforge: The code refactoring platform"
        description="CodeReforge is a platform where users can post code and others refactorize it so everyone improves at coding"
        render={() => (
          <Row>
            <Tags xs={24} sm={24} md={4} lg={4} xl={4}>
              <TagFilter tags={tags} onFilterChange={this.tagsFilterChangeHandler} />
            </Tags>
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <TopFilters>
                <Radio.Group
                  defaultValue="new"
                  buttonStyle="solid"
                  onChange={this.filterChangeHandler}
                >
                  <RadioButton value="new">New</RadioButton>
                  <RadioButton value="notrefactored">Not refactored</RadioButton>
                  <RadioButton value="popular">Popular</RadioButton>
                </Radio.Group>
              </TopFilters>
              <PostList posts={this.filterAndSortPosts()} />
            </Col>
          </Row>
        )}
      />
    )
  }
}

export default Home
