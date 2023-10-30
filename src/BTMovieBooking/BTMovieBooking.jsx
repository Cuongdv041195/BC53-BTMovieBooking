import React from 'react'
import data from './data.json'
import { ChairList } from './ChairList'
import { Result } from './Result'

export const BTMovieBooking = () => {
  console.log({ data })
  return (
    <div className="main">
      <div className="background">
        <div className="container">
          <h1 className="text-white">BTMovieBooking</h1>
          <div className="row">
            <div className="col-8">
              <div className="p-3 text-white text-center bg-dark fw-bold mb-5 sreen">
                SCREEN
              </div>
              <ChairList data={data} />
            </div>
            <div className="col-4">
              <Result />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
