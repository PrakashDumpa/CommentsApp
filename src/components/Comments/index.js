import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {count: 0, name: '', Comment: '', commentsList: []}

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({Comment: event.target.value})
  }

  addCommentButton = () => {
    // Random number Generation
    let number = Math.floor(Math.random() * 10)
    let randomColor
    if (number >= initialContainerBackgroundClassNames.length) {
      number = 10 - number
      randomColor = initialContainerBackgroundClassNames[number]
    } else {
      randomColor = initialContainerBackgroundClassNames[number]
    }

    // Add the Comment to the List
    const {name, Comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      Comment,
      isLike: false,
      time: new Date(),
      randColor: randomColor,
    }
    if (name !== '' && Comment !== '') {
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        Comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  // Like and Dislike

  onClickLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  // Delete Items in the List

  onDeleteListItem = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: updatedList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, Comment, count} = this.state
    return (
      <div className="bg_container">
        <div className="main_container">
          <h1>Comments</h1>
          <div className="comment_and_image_Container">
            <form className="form_container">
              <p>Say something about 4.0 Technologies</p>
              <input
                onChange={this.onNameChange}
                type="text"
                placeholder="Your Name"
                className="p-2 inputName w-100"
                value={name}
              />
              <div className="comment_section mt-3">
                <textarea
                  onChange={this.onCommentChange}
                  type="text"
                  className="h-100 w-100 p-2 inputName"
                  placeholder="Your Comment"
                  value={Comment}
                />
              </div>
              <button
                onClick={this.addCommentButton}
                type="button"
                className="mt-3 btn btn-primary"
              >
                Add Comment
              </button>
            </form>
            <div className="image_container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <hr className="hr_color" />
          <div className="count_container">
            <div className="count_division mr-2">
              <p className="m-0">{count}</p>
            </div>
            <p>Comments</p>
          </div>
          <ul className="list-unstyled">
            {commentsList.map(eachCommentDetails => (
              <CommentItem
                CommentDetails={eachCommentDetails}
                key={eachCommentDetails.id}
                onClickLikeButton={this.onClickLikeButton}
                onDeleteListItem={this.onDeleteListItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
