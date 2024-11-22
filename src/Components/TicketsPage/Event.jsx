import React from 'react';
import styled from 'styled-components';

const Event = ({ title, price, discount }) => {
  return (
    <StyledWrapper>
      <div className="card">
       
          
          <div className="front  flex flex-col ">
            <div className="img">
              <div className="circle" />
              <div className="circle" id="right" />
              <div className="circle" id="bottom" />
            </div>
            
            
              <div className="description ">
                <div className="title flex  flex-col-reverse">
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 text-sm">
              <li>Access to all TEDxLNMIIT talks and workshops</li>
              <li>Interaction sessions with speakers</li>
              <li>Delicious meals and refreshments</li>
              <li>Exclusive TEDxLNMIIT experiences</li>
            </ul>
                  <p className="title">
                    <strong>{title}</strong>
                  </p>
            
                </div>
                <p className="price ">{price}</p>
              {discount && <p className="discount">{discount}</p>}
            </div>
              </div>
              
          </div>
    
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    height: 250px;
    width: 400px;
    margin: 10px;
    display: inline-block; /* Display horizontally */
  }

  .content {
    width: 100%;
    height: 100%;
  
  
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }
  .img{

  }
  .front,
  .back {
    background-color: #151515;
    position: absolute;
   
  
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .card {
    overflow: visible;
    
    margin: 10px;
 
    position: relative;
    border-radius: 15px; /* Keep consistent styling */
    transition: border 0.3s ease; /* Smooth transition for hover effect */
  }

  .description:hover {
    border: 2px solid red; /* Apply red border on hover */
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    border-radius: 5px;
    overflow: hidden;
  }




  .front {
  
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    height: 250px;
   padding:20px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 15px;
  }

  .title {
    font-size: 21px;
    display: flex;
    justify-content: space-between;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

 {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: absolute;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }


`;

export default Event;
