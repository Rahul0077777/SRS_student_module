import React from 'react'
import './Status.css'
function Status() {
  return (
    <div>
      <div class="container mt-3">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10">
                <div class="rounded">
                    <div class="table-responsive table-borderless">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">
                                       
                                    </th>
                                    
                                    <th>Subject Name</th>
                                    <th>Subject Code</th>
                                    <th>Status</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody class="table-body">
                                <tr class="cell-1">
                                    <td class="text-center">
                                       
                                    </td>
                                    
                                    <td>Java technology</td>
                                    <td>CUTM1234</td>
                                    <td>Approved</td>
                                 
                                    <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr class="cell-1">
                                    <td class="text-center">
                                       
                                    </td>
                                   
                                    <td>Advance java</td>
                                    <td>CUTM1234</td>
                                    <td>Pending</td>
                                   
                                    <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr class="cell-1">
                                    <td class="text-center">
                                        
                                    </td>
                                    
                                    <td>React</td>
                                    <td>CUTM1234</td>
                                    <td>Pending</td>
                                    
                                    <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                                <tr class="cell-1">
                                    <td class="text-center">
                                        
                                    </td>
                                    
                                    <td>Operating system</td>
                                    <td>CUTM1234</td>
                                    <td>Pending</td>
                                    
                                    <td><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Status
