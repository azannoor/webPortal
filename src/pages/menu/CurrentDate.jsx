import { useState,useEffect } from "react";
import styles from "./CurrentDate.module.css";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const date = new Date();
    setCurrentDate(formatter.format(date));
  }, []);

  return (
    <div className={styles.currentDate}>
      <i className="ri-calendar-2-line" ></i>
      {currentDate}
    </div>
  );
};

export default CurrentDate;
