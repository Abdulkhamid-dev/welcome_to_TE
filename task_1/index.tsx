import React,{ Component, memo, PureComponent} from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
const SecondComponent = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// class component
class ThirdComponent extends PureComponent<IUser> {
    props: IUser
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {
    props: IProps;
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}

export const MemoizedSecondComponent = memo(
    SecondComponent,
    (prevProps: { user: { name: any; age: any; }; }, nextProps: { user: { name: any; age: any; }; }) => {
      return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age
      );
    }
  );
  
  export const MemoizedFourthComponent = memo(
    FourthComponent,
    (prevProps: { user: { name: any; age: any; }; }, nextProps: { user: { name: any; age: any; }; }) => {
      return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age
      );
    }
  );