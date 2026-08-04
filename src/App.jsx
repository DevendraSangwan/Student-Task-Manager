import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import tasksData from './data/db';

const App = () => {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task.title,
        category: task.category,
        priority: task.priority,
        status: 'Pending',
      },
    ]);
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: 'Completed' } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                addTask={addTask}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
