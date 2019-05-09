import React from 'react';
import {Table} from 'reactstrap';

const ShoulderTable = (props) => {
  if (props.results['armsFallForward'] !== true) {
    return null;
  }
  return (
    <div>
      <Table dark bordered id="lowBackTable">
        <thead>
          <tr>
            <td colSpan="4" className="text-center bg-primary">Corrective Exercise Program for Shoudler Impairment: Arms Fall Forward</td>
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
              <p>&rArr; Latissimus Dorsi (aka lats, outer back muscles)</p>
              <p>&rArr; Thoraric Spine (mid-back)</p>
            </td>
            <td>Hold on tender area for 30 seconds</td>
          </tr>
          <tr id="phase2">
            <th scope="row">2</th>
            <td>Static Stretching</td>
            <td>
              <p>&rArr; Latissimus Dorsi (aka lats, outer back muscles)</p>
              <p>&rArr; Pectorals (chest muscles)</p>
            </td>
            <td>30-second hold</td>
          </tr>
          <tr id="phase3">
            <th scope="row">3</th>
            <td>Isolated Strengthening</td>
            <td>
              <p>&rArr; Rotator cuff</p>
              <p>&rArr; Middle and lower trapezius</p>
            </td>
            <td>10-15 repetitions with 2-second isometric hold and 4-second eccentric contraction</td>
          </tr>
          <tr id="phase4">
            <th scope="row">4</th>
            <td>Integration Exercises</td>
            <td>
              <p>&rArr; Squat to row</p>
            </td>
            <td>10-15 reps under control</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ShoulderTable;