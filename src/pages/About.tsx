import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../store';
import { toggleProfile } from '../store/profile/action';

export const About: FC = (props: any) => {
    console.log('props', props);
    return (
        <>
            <h2>About page</h2>
            {/* <p>{name}</p> */}
            <input type="checkbox" checked={props.visible} readOnly />
            <button onClick={props.toggle}>change visible</button>
        </>
    );

};

const mapStateToProps = (state: StoreState) => ({
    name: state.profile.name,
    visible: state.profile.visible,
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
  })

export const AboutWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
    )(About);


