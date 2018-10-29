// @flow
import React from 'react'

type Props = {
  // TODO: add parameters such as show title and suggestions
  titles: string[],
  comments: string[],
  videoIds: string[],
  numberOfCards: 'one' | 'two',
  additionalClasses: string
}

class movieCards extends React.Component<Props> {
  render () {
    // Render nothing if there is no card
    if (!this.props.data || this.props.data.length === 0) {
      return null
    }

    return (
      <div
      className={`${this.props
        .numberOfCards} ${this.props.additionalClasses} text cards`}
        >
        {this.props.data.map((article, index) => {
          if (typeof article.title === 'undefined') {
            return false
          }

          return (
            <article className='card ui stackable' key={index} onClick={this.props.showData.bind(this, article)}>
            <img src={article.np8_main_media} alt={article.title} />
            <div className="article-bottom">{article.title}</div>
            </article>
          )
        })}
        </div>
      )
    }
  }
export default movieCards
