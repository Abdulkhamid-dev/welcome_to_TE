import { Component, createRef, useState } from 'react';

class MainComponent extends Component {
    myRef = createRef({}); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent customRef={this.myRef} />  {/* set ref to controll child component */}
            </>
        );
    }
};

const ChildComponent = (props) => {
    const [active, setActive] = useState(true);
    const toggleButton = () => setActive((state) => !state);
  
    props.customRef.current = {
      toggleButton: toggleButton
    };
    return active ? <div>child component</div> : null;
  };
