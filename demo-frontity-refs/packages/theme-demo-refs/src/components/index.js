import React from "react";
import { connect, styled, Head } from "frontity";

const EmailInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} type="email" />
));

const refEmailInput = React.createRef();

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {

  const onClickButton = () => refEmailInput.current.focus()

  return (
      <>
        
        {/* Add some metatags to the <head> of the HTML. */}
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>


        <HeaderMainPage>-- Demo Refs + Frontity --</HeaderMainPage>

        <div style={{ width: 400, margin: '0 auto' }}>
          <h2>Data from State</h2>
          <p>Site Description: <em>{state.frontity.description}</em></p>
          <p>Site Title: <em>{state.frontity.title}</em></p>
          <p>Some Post Link: <em>{state.source.post["26"].link}</em></p>
          <p>Some Post Title: <em>{state.source.post["26"].title.rendered}</em></p>
          
          <h2>AntD DatePicker Component</h2>
          <div>
            <EmailInput ref={refEmailInput} />  
            <br/><br/>
            <button onClick={onClickButton}>
              Click me to focus email
            </button>
          </div>
        </div>

      
      </>
    
  );
};

export default connect(Theme);

const HeaderMainPage = styled.h1`
  font-size: 40px;
  font-style: italic;
  width: 400;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
`;

