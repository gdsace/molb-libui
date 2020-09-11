import { shallow } from "enzyme";
import * as React from "react";
import { ListcardStatus } from "../../EnumValues";
import { Listcard } from "../Listcard";
describe("Input", function () {
    it("renders ui", function () {
        var onClickMock = jest.fn();
        var titleText = "Petroleum and Flammable Material Storage Licence";
        var subTitleText = "subTitleText";
        var wrapper = shallow(React.createElement(Listcard, { title: titleText, subTitle: subTitleText, description: "Singapore Civil Defence Force (SCDF)", tag: "Expires on 8 Oct 2018", supportingText: "S$200.00~500.00", buttonText: "Action Button", status: ListcardStatus.Warning, onButtonClick: onClickMock }));
        var title = wrapper.find(".title");
        var subTitle = wrapper.find(".subTitle");
        expect(title.text()).toEqual(titleText);
        expect(subTitle.text()).toEqual(subTitleText);
    });
});
//# sourceMappingURL=listcard.test.js.map