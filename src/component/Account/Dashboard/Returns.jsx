import React from 'react'
import style from './Dashboard.module.css'

const Returns = () => {
    const header = [
     "invesment plan",
     "investment",
     "Amount earned",
     "balance",
     "Date received"
    ]
  return (
    <section className={style.returns}>
      <h2>Investment Returns</h2>
      <div className={style.table_wrapper}>
      <table>
        <thead>
            <tr>
              {header.map((e)=>(
                <th key={e}>{e}</th>
              ))}
            </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      </div>
    </section>
  )
}

export default Returns