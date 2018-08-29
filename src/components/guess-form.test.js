import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe("<GuessForm />",() => {
	it("Renders correctly", () => {
		shallow(<GuessForm />);
	});

	it("Calls onMakeGuess with the input value", () => {
		const callBack = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callBack} />);
		const value = 30;
		const input = wrapper.find("#userGuess").instance().value = value;
		wrapper.simulate("submit");
		expect(callBack).toHaveBeenCalledWith(value.toString());
	});

	it("Input value is reset after the submission of the form", ()=> {
		const wrapper = mount(<GuessForm />);
		const input = wrapper.find('#userGuess').instance();
		input.value = 90;
		wrapper.simulate('submit');
		expect(input.value).toEqual('');
	});
});