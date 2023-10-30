//rafc
import React from 'react'
import { Chair } from './Chair'

export const ChairList = ({ data }) => {
    return (
        <div className='mb-4'>
            {data.map((hangGhe) => {
                return (
                    <div key={hangGhe.hang} className="d-flex justify-content-center gap-3 mt-3">
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                display: "flex",
                                alignItems:"center",
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'yellow',
                            }}
                        >
                            {hangGhe.hang}
                        </div>
                        <div className="d-flex gap-3">
                            {hangGhe.danhSachGhe.map((ghe) => {
                        
                                return <Chair  ghe={ghe}
                                
                                disabled={hangGhe.hang===""}
                                key={ghe.soGhe} />
                                
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
