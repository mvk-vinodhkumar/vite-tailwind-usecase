import React from "react"
import styles from "../style"
import { stats } from "../constants/index"

const Stats = () => (
  <section
    className={`${styles.flexCenter} sm:justify-between justify-center flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className="flex flex-row justify-start items-center m-3"
      >
        <h4
          className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white mr-3`}
        >
          {stat.value}
        </h4>
        <span className="text-gradient uppercase font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]">
          {stat.title}
        </span>
      </div>
    ))}
  </section>
)

export default Stats
