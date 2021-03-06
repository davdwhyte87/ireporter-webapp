import React from 'react'
import { Link } from 'react-router-dom'

export default class  Record extends React.Component {
  render() {
    const {record, user} = this.props
    const currentData = record
    return (
      <div className="card col-3">
        <p className="record-status">Status:{currentData.status} {user.isAdmin?<a href="#"><i className="fa fa-fw fa-edit"></i></a>:''}</p> 
        { currentData.image? <img className="record-image" src={currentData.image} />:<img className="record-image" src="https://efrskips.com/wp-content/uploads/2017/05/grey-bg.png" />}
        <Link to={`/record/${currentData.id}`} className="record-title"  data={currentData.id}>{currentData.title}</Link>
        <div className="record-actions">
        {(user.id == currentData.createdBy)?
          <a href="#" className="rc"><i   data="${currentData.id}" className="fa fa-fw fa-edit "></i></a>
          :''}
            {(user.id == currentData.createdBy)?
            <a href="#" className="rc"><i data="${currentData.id}"  className="fa fa-fw fa-trash"></i></a>
            :''}
        </div>
      </div>
    )
  }
}