import React, { useState } from "react";

const Modal = ({data}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      
      <div className='border-solid border-2 text-gray-400 font-bold shadow-lg shadow-blue-500/50 hover:' onClick={() => setShowModal(true)} >
        <h2 className="my-4 text-slate-500 text-lg leading-relaxed">{data.type}</h2>
        <h3 className="my-4 text-slate-500 text-lg leading-relaxed">{data.details}</h3>
        <h3 className="my-4 text-slate-500 text-lg leading-relaxed">{data.status}</h3>
        <h3 className="my-4 text-slate-500 text-lg leading-relaxed">{data.original_launch}</h3>

    </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold align-center">
                   Details:-
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-10 flex-auto">
                  <h2 className="my-4  text-lg leading-relaxed font-bold text-green-600">Type- <p className="text-slate-500">{data.type}</p></h2>
                  <p className="my-4  text-lg leading-relaxed font-bold text-green-600" >Details- <p className="text-slate-500">{data.details}</p> </p>
                  <p className="my-4  text-lg leading-relaxed font-bold text-green-600">Status- <p className="text-slate-500">{data.status}</p></p>
                  <p className="my-4  text-lg leading-relaxed font-bold text-green-600">Lunch Date- <p className="text-slate-500">{data.original_launch}</p></p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
