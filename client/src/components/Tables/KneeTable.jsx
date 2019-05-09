import React from 'react';
import {Table} from 'reactstrap';

const KneeTable = (props) => {

  console.log("TCL: KneeTable -> props.results['kneesMoveIn']", props.results['kneesMoveIn'])
  if (props.results['kneesMoveIn'] !== true) {
    return null;
  }
  return (
    <div>
      <Table dark bordered id="kneeTable">
        <thead>
          <tr>
            <td colSpan="4" className="text-center bg-primary">Corrective Exercise Program for Knee Impairment</td>
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
              <p>&rArr; Gastrocnemius/soleus (back calf muscles)</p>
              <p>&rArr; Adductors (inner thigh muscles)</p>
              <p>&rArr; Bicep femoris - short head (side hamstring muscles)</p>
              <p>&rArr; Tensor Fascia Latae/IT Band (aka TFL, hip and outer thigh muscles)</p>
              <p>&rArr; Piriformis (knees moves out during overhead squat)</p>
            </td>
            <td>Hold on tender area for 30 seconds</td>
          </tr>
          <tr id="phase2">
            <th scope="row">2</th>
            <td>Static Stretching</td>
            <td>
              <p>&rArr; Gastrocnemius/soleus (back calf muscles)</p>
              <p>&rArr; Adductors (inner thigh muscles)</p>
              <p>&rArr; Bicep femoris - short head (side hamstring muscles)</p>
              <p>&rArr; Tensor Fascia Latae/IT Band (aka TFL, hip and outer thigh muscles)</p>
              <p>&rArr; Piriformis (knee(s) moves out during overhead squat)</p>
            </td>
            <td>30-second hold</td>
          </tr>
          <tr id="phase3">
            <th scope="row">3</th>
            <td>Isolated Strengthening</td>
            <td>
              <p>&rArr; Posterior tibialis</p>
              <p>&rArr; Anterior tibialis</p>
              <p>&rArr; Gluteus meduis</p>
              <p>&rArr; Gluteus maximus</p>
              <p>&rArr; Adductors and medial hamstring (knee(s) move out during overhead squat)</p>
            </td>
            <td>10-15 repetitions with 2-second isometric hold and 4-second eccentric contraction</td>
          </tr>
          <tr id="phase4">
            <th scope="row">4</th>
            <td>Integration Exercises</td>
            <td>
              <p>Functional movement progression:</p>
              <p>&rArr; Ball squats</p>
              <p>&rArr; Step-ups</p>
              <p>&rArr; Lunges</p>
              <p>&rArr; Single-leg squat</p>
            </td>
            <td>10-15 reps under control</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default KneeTable;