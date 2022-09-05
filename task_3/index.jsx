import { Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <Memoized user={user} />
        </Fragment>
    );
};
const Memoized = memo(ChildComponent, (prevProps, nextProps) => {
    return prevProps.user.name === nextProps.user.name && prevProps.user.age === nextProps.user.age
  });
// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
});
