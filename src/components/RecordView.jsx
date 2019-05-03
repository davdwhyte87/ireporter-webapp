import React from 'react'

export default class RecordView extends React.Component {
  render() {
    const {record, user} = this.props
    const currentData = record
    return (
      <div className="card col-6">
        <p className="record-status">Status:{currentData.status} {user.isAdmin?<a href="#"><i className="fa fa-fw fa-edit"></i></a>:''}</p> 
        { currentData.image? <img className="record-imagex" src={currentData.image} />:<img className="record-imagex" src="https://efrskips.com/wp-content/uploads/2017/05/grey-bg.png" />}
        <a href="#" className="record-title"  data={currentData.id}>{currentData.title}</a>
        <p className="rc-text">
          {currentData.comment}
        </p>
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