import React from 'react'

export default class  Record extends React.Component {
  render() {
    return (
      <div class="card col-3">
        <p class="record-status">Status: ${currentData.status} ${user.isAdmin?'<a href="#"><i class="fa fa-fw fa-edit"></i></a>':''}</p> 
        ${ currentData.image?` <img class="record-image" src="${currentData.image}"/>`:''}
        <a href="single-record.html" class="record-title" onClick="setViewSingle(event)" data="${currentData.id}">${currentData.title}</a>
        <div class="record-actions">
        ${(user.id == currentData.createdBy)?
          `<a href="#" class="rc"><i  onClick="setEdit(event)" data="${currentData.id}" class="fa fa-fw fa-edit "></i></a>`
          :''}
            ${(user.id == currentData.createdBy)?
            `<a href="#" class="rc"><i onClick="deleteRecord(event)"  data="${currentData.id}"  class="fa fa-fw fa-trash"></i></a>`
            :''}
        </div>
      </div>
    )
  }
}