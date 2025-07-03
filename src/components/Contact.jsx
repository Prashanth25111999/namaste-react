import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 mt-3">
      <h1 className="font-bold text-3xl mt-3 mx-3 text-center m-auto">
        ContatcUs Page...!
      </h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="border-2 rounded m-3 p-1"
          />
          <input
            type="text"
            placeholder="Descreption"
            name="descreption"
            className="border-2 rounded m-3 p-1"
          />
          <button className="border-1 rounded m-3 px-1 bg-blue-400 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
