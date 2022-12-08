// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {CommentDetails, onClickLikeButton, onDeleteListItem} = props
  const {name, Comment, id, isLike, time, randColor} = CommentDetails

  const firstChr = name[0].toUpperCase()

  const likeButton = () => {
    onClickLikeButton(id)
  }

  const isLikeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const DeleteListItem = () => {
    onDeleteListItem(id)
  }

  const addClassName = isLike && 'text-primary'

  return (
    <li className="m-0 list_item">
      <div className="naming_section">
        <div className={`Char_division mr-2 ${randColor}`}>
          <p className="m-0">{firstChr}</p>
        </div>
        <div className="w-100">
          <div className="d-flex">
            <p className="name_size m-0">{name}</p>
            <p className="m-0 pt-2 pl-3">{formatDistanceToNow(time)}</p>
          </div>
          <p className="m-0 comment">{Comment}</p>
          <div className="icons_division mt-2">
            <button
              type="button"
              className="like_button m-0"
              onClick={likeButton}
            >
              <img className="mr-2 pt-1" src={isLikeImage} alt="like" />
              <p className={`m-0 ${addClassName}`}>Like</p>
            </button>
            <button
              type="button"
              className="deleteButton mb-0"
              onClick={DeleteListItem}
              // eslint-disable-next-line react/no-unknown-property
              testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="icons_division">
          <button
            type="button"
            className="like_button m-0"
            onClick={likeButton}
          >
            <img className="mr-2" src={isLikeImage} alt="like" />
            <p className={`m-0 ${addClassName}`}>Like</p>
          </button>
          <button
            type="button"
            className="deleteButton mb-0"
            onClick={DeleteListItem}
            // eslint-disable-next-line react/no-unknown-property
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div> */}
      <hr className="hr_color" />
    </li>
  )
}

export default CommentItem
