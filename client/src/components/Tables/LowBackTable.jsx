import React from 'react';
import {Table} from 'reactstrap';
import '../../styles/Tables.css';

const LowBackTable = (props) => {
  return (
    <div>
      <Table dark bordered id="lowBackTable" className="ghost">
        <thead>
          <tr>
            <td colSpan="4" className="text-center bg-primary" id="lowBackHead">Corrective Exercise Program for LPHC Impairment: </td>
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
            <td id="lowBackPhase1"></td>
            <td>Hold on tender area for 30 seconds</td>
          </tr>
          <tr >
            <th scope="row">2</th>
            <td>Static Stretching</td>
            <td id="lowBackPhase2"></td>
            <td>30-second hold</td>
          </tr>
          <tr >
            <th scope="row">3</th>
            <td>Isolated Strengthening</td>
            <td id="lowBackPhase3"></td>
            <td>10-15 repetitions with 2-second isometric hold and 4-second eccentric contraction</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Integration Exercises</td>
            <td id="lowBackPhase4"></td>
            <td>10-15 reps under control</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default LowBackTable;