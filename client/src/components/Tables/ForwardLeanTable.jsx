import React from 'react';
import {Table} from 'reactstrap';

const ForwardLeanTable = (props) => {
  if (props.results['forwardLean'] !== true) {
    return null;
  }
  return (
    <div>
      <Table dark bordered id="forwardLeanTable">
        <thead>
          <tr>
            <td colSpan="4" className="text-center bg-primary">Corrective Exercise Program for LPHC Impairment: Excessive Forward Lean</td>
          </tr>
          <tr>
            <th scope="col">Phase</th>
            <th scope="col">Modality</th>
            <th scope="col">Muscle(s)/Exercise</th>
            <th scope="col">Time Spent/Repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Foam Roll (SMR)</td>
            <td>
              <p>&rArr; Gastrocnemius/soleus</p>
              <p>&rArr; Hip flexor complex</p>
            </td>
            <td>Hold on tender area for 30 seconds</td>
          </tr>
          <tr >
            <th scope="row">2</th>
            <td>Static Stretching</td>
            <td>
              <p>&rArr; Gastrocnemius/soleus</p>
              <p>&rArr; Hip flexor complex</p>
              <p>&rArr; Abdominal complex</p>
            </td>
            <td>30-second hold</td>
          </tr>
          <tr >
            <th scope="row">3</th>
            <td>Isolated Strengthening</td>
            <td>
              <p>&rArr; Anterior tibialis</p>
              <p>&rArr; Gluteus maximus</p>
              <p>&rArr; Erector spinae</p>
              <p>&rArr; Core stabilizers</p>
            </td>
            <td>10-15 repetitions with 2-second isometric hold and 4-second eccentric contraction</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Integration Exercises</td>
            <td>&rArr; Ball wall squat with overhead press</td>
            <td>10-15 reps under control</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ForwardLeanTable;