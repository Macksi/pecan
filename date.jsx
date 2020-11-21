const command = 'bash pecan/scripts/activewindow';
const refreshFrequency = 1; // ms

const render = ({ output }) => (
  <div class="screen">
    <div class="holder">
      <div class="pecandate">{`${output}`}</div>
    </div>
  </div>
);

export { command, refreshFrequency, render };
