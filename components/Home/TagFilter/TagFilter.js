import React, { Component } from 'react'
import Input from '../../uikit/Input'
import Tag from '../../uikit/Tag'
import { TagContainer, NoAppliedTags, TagFilterContainer } from './TagFilterStyles'

class TagFilter extends Component {
  state = {
    selectedTags: [],
    filter: null,
  }

  filterTags = () => {
    const { filter } = this.state
    const { tags } = this.props
    if (!filter) return tags
    return tags.filter(tag => tag.name.includes(filter))
  }

  applyFilter = e => {
    this.setState({ filter: e.target.value })
  }

  selectTag = tag => {
    const { onFilterChange } = this.props
    this.setState(
      prevState => ({
        selectedTags: Array.from(new Set([...prevState.selectedTags, tag])),
      }),
      () => {
        const { selectedTags } = this.state
        onFilterChange(selectedTags)
      }
    )
  }

  unselectTag = tag => {
    const { onFilterChange } = this.props
    this.setState(
      prevState => ({
        selectedTags: prevState.selectedTags.filter(t => t._id !== tag._id),
      }),
      () => {
        const { selectedTags } = this.state
        onFilterChange(selectedTags)
      }
    )
  }

  render() {
    const { selectedTags, filter } = this.state
    return (
      <TagFilterContainer>
        <h3>Applied tags</h3>
        {selectedTags.map(tag => (
          <TagContainer key={`selected${tag._id}`}>
            <Tag closable afterClose={() => this.unselectTag(tag)}>
              {tag.name}
            </Tag>
          </TagContainer>
        ))}
        {selectedTags.length === 0 && <NoAppliedTags>No applied tags</NoAppliedTags>}
        <h3>All tags</h3>
        <Input
          onChange={this.applyFilter}
          placeholder="Search..."
          style={{ marginBottom: '10px' }}
        />
        {this.filterTags()
          .slice(0, 25)
          .map(tag => (
            <TagContainer key={`all${tag._id}`}>
              <Tag clickable="true" onClick={() => this.selectTag(tag)}>
                {tag.name}
              </Tag>
            </TagContainer>
          ))}
        {!filter && <NoAppliedTags>...{this.filterTags().length - 25} more</NoAppliedTags>}
      </TagFilterContainer>
    )
  }
}

export default TagFilter
