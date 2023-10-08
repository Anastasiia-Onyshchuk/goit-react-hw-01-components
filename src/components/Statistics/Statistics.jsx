import React from 'react';
import css from './Statistics.module.css'; 

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.wrapper}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}  style={{ backgroundColor: generateRandomColor() }}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
        </ul>
        </div>
    </section>
  );
};

