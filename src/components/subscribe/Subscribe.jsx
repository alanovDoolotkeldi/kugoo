import React from "react";

const Subscribe = () => {
    function handleSubmit(event){
        event.preventDefault()
    }
  return (
    <div className="subscribe">
      <div className="container">
        <h1>
          ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ 
        </h1>
      <form onSubmit={handleSubmit} action="">
        <input type="text" placeholder="Введите Ваш email"  />
        <button type="submit">Подписаться</button>
      </form>
      </div>
    </div>
  );
};

export default Subscribe;
