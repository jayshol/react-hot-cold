import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe("<TopNav />", () => {
	it("Renders correctly", () => {
		shallow(<TopNav />);
	});

	it("Restarts game on NewGame button click", () => {
		const callBack = jest.fn();
		const wrapper = shallow(<TopNav onRestartGame={callBack} />);
		const link = wrapper.find(".new");
		link.simulate("click",{
			preventDefault(){} 
		});
		expect(callBack).toHaveBeenCalled();
	});

	it("Performs aural update on state of the button clicked", () => {
		const callBack = jest.fn();
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callBack} />);
		const link = wrapper.find(".status-link");
		link.simulate("click", {
			preventDefault(){}
		});
		expect(callBack).toHaveBeenCalled();
	});
});

