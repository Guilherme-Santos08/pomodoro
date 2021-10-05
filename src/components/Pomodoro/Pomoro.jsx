/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTick } from "../../hooks/useTick";
import { Container } from "./styles";

const Pomodoro = ({ whatThemeBackground, historys }) => {
  const { timerMinutes, timerSeconds, paused, setPaused } =
    useTick();
  return (
    <Container whatThemeBackground={whatThemeBackground}>
      <div className="teste">
        <header>
          <Link to="/">
            <li>Pomodoro</li>
          </Link>
          <Link to="/short-break">
            <li>Short Break</li>
          </Link>
          <Link to="/long-break">
            <li>Long Break</li>
          </Link>
        </header>
        <div className="counter">
          <div className="counter__info">
            <span>
              {timerMinutes}:{timerSeconds}
            </span>
            <button onClick={() => setPaused(!paused)}>Start</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pomodoro;
