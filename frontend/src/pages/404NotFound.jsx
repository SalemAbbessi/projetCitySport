// import React from 'react'

// function NotFound() {
//     return (
//         <div style={{display:"flex",justifyContent:"center",marginTop:"100px"}}>
//             <img src="https://img.freepik.com/vecteurs-libre/glitch-error-404-page_23-2148105404.jpg?size=338&ext=jpg" alt="page not found" />
//         </div>
//     )
// }

// export default NotFound
// import styled from 'styled-components';

// const NotFoundContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const NotFoundImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
// `;

// function NotFound() {
//   return (
//     <NotFoundContainer>
//       <NotFoundImage
//         src="https://img.freepik.com/vecteurs-libre/glitch-error-404-page_23-2148105404.jpg?size=338&ext=jpg"
//         alt="Page not found"
//       />
//     </NotFoundContainer>
//   );
// }

// export default NotFound;

import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const NotFoundImage = styled.img`
  max-width: 80%;
  max-height: 90%;
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundImage
        src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
        alt="Page not found"
      />
    </NotFoundContainer>
  );
}

export default NotFound;
