import React from 'react';
import {Table} from 'reactstrap';

const FootAnkleTable = (props) => {
  if (props.results['feetTurnOut'] !== true) {
    return null;
  }
  return (
    <div>
      <Table dark bordered id="footTable">
        <thead>
          <tr>
            <td colSpan="4" className="text-center bg-primary">Corrective Exercise Program for Foot and Ankle Impairment</td>
          </tr>
          <tr>
            <th scope="col">Phase</th>
            <th scope="col">Modality</th>
            <th scope="col">Muscle(s)/Exercise</th>
            <th scope="col">Time Spent/Repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr id="phase1">
            <th scope="row">1</th>
            <td>Foam Roll (SMR)</td>
            <td>
              <p>&rArr; Lateral gastrocnemius, soleus, and peroneals (back and side calf muscles)</p>
              <p>&rArr; Bicep femoris - short head (side hamstring muscles)</p>
              <p>&rArr;Tensor Fascia Latae (aka TFL, hip muscles)</p>
            </td>
            <td>Hold on tender area for 30 seconds</td>
          </tr>
          <tr id="phase2">
            <th scope="row">2</th>
            <td>Static Stretching</td>
            <td>
              <p>&rArr; Lateral gastrocnemius, soleus, and peroneals (back and side calf muscles)</p>
              <p>&rArr; Bicep femoris - short head (side hamstring muscles)</p>
              <p>&rArr; Tensor Fascia Latae (aka TFL, hip muscles)</p>
            </td>
            <td>30-second hold</td>
          </tr>
          <tr id="phase3">
            <th scope="row">3</th>
            <td>Isolated Strengthening</td>
            <td>
              <p>&rArr; Posterior tibialis</p>
              <p>&rArr; Anterior tibialis</p>
              <p>&rArr; Medial hamstrings</p>
            </td>
            <td>10-15 repetitions with 2-second isometric hold and 4-second eccentric contraction</td>
          </tr>
          <tr id="phase4">
            <th scope="row">4</th>
            <td>Integration Exercises</td>
            <td>
              <p>&rArr; Step-Up to balance</p>
              <p>&rArr; Single-leg balance reach</p>
            </td>
            <td>10-15 reps under control</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default FootAnkleTable;