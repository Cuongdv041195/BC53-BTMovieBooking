import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTMovieBooking/slice'

export const Result = () => {
    const {  chairsBooking } = useSelector((state) => state.btMovieBooking)
    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='text-warning'>Kết quả đặt vé</h2>
            <div className='text-white fw-bold'>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair bg-secondary"></div>
                    <span>Ghế đã đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair bg-danger"></div>
                    <span>Ghế đang đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <span>Ghế chưa đặt</span>
                </div>
            </div>
            <table className="table mt-3 border">
                <thead>
                    <tr >
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {chairsBooking.map((ghe) => {
                        return (
                            <tr key={ghe.soGhe}>
                                <td>{ghe.soGhe}</td>
                                <td>{ghe.gia}</td>
                                <td className="text-danger" onClick={() => {
                    dispatch(btMovieBookingActions.setDeleteBooking(ghe))
                }}>X</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Tổng</td>
                        <td>
                            {chairsBooking.reduce((total, value) => {
                                return (total += value.gia)
                            }, 0)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button
                className="btn btn-success mt-5"
                onClick={() => {
                    dispatch(btMovieBookingActions.setChairsBooked())
                }}
            >
                Thanh toán
            </button>

        </div>
    )
}
