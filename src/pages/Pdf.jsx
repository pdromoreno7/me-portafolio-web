/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const PdfStyles = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;
export function Pdf() {
  return (
    <PdfStyles>
      <object
        data={require('../assets/doc/Cv-frontendReact1.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </PdfStyles>
  );
}
// import React, { Component } from 'react';

// export class Pdf extends Component {
//   render() {
//     return (
//       <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
//         <object
//           data={require('../assets/doc/Cv-frontendReact1.pdf')}
//           type="application/pdf"
//           width="100%"
//           height="100%"
//         />
//       </div>
//     );
//   }
// }

// export default Pdf;
