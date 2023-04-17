import { useHistory } from 'react-router-dom';

function TasksBtn() {
  const history = useHistory();
  return (
    <button
      type="button"
      className="tasks-btn"
      onClick={() => history.push('/tasks')}
    >
      Serviços
    </button>
  );
}

export default TasksBtn;
