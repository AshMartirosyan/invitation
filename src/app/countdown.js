"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import Petur from "@/assets/images/petur_4.png";

const countDownDate = new Date("2024-04-14").getTime();
const Countdown = () => {
  const interval = useRef();
  const [date, setDate] = useState(countDownDate - new Date().getTime());

  const calculateDate = useCallback(() => {
    const distance = countDownDate - new Date().getTime();
    if (distance < 0) {
      clearInterval(x);
      return;
    }
    setDate(distance);
  }, []);

  useEffect(() => {
    interval.current = setInterval(calculateDate, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [calculateDate]);

  const days = useMemo(() => Math.floor(date / (1000 * 60 * 60 * 24)), [date]);
  const hours = useMemo(
    () => Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    [date]
  );
  const minutes = useMemo(
    () => Math.floor((date % (1000 * 60 * 60)) / (1000 * 60)),
    [date]
  );
  const seconds = useMemo(
    () => Math.floor((date % (1000 * 60)) / 1000),
    [date]
  );

  const dateDecorator = useCallback(
    (date) => (date > 9 ? date : `0${date}`),
    []
  );

  return (
    <>
      <div className="background_img_5"></div>
      <div className="clock">
        <p className="wien title animation_small_to_n">
          Սիրով սպասում ենք
          <br />
          մնաց...
        </p>

        <div className="date_container">
          <span className="regular date">
            {dateDecorator(days)}
            <br />
            <p className="regular date_name">Օր</p>
          </span>
          <p className="regular date">:</p>
          <span className="regular date">
            {dateDecorator(hours)}
            <br />
            <p className="regular date_name">Ժամ</p>
          </span>
          <p className="regular date">:</p>
          <span className="regular date">
            {dateDecorator(minutes)}
            <br />
            <p className="regular date_name">Րոպե</p>
          </span>
          <p className="regular date">:</p>
          <span className="regular date">
            {dateDecorator(seconds)}
            <br />
            <p className="regular date_name">Վարկյան</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Countdown;
