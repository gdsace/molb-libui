import { shallow } from "enzyme";
import * as React from "react";
import { H7 } from "../../h7";
import { Tile } from "../../tileGroup/tile";
import { RadioCardTypeQuestion } from "../RadioCardTypeQuestion";
describe.only("RadioCardTypeQuestion", function () {
    var mockOptions = [
        {
            label: "label",
            description: "description",
            value: "value"
        },
        {
            label: "label",
            description: "description",
            value: "value"
        }
    ];
    it("should render ui element", function () {
        var wrapper = shallow(React.createElement(RadioCardTypeQuestion, { onChange: jest.fn(), options: mockOptions, question: "this is question", selectedAnswer: "answer" }));
        var header = wrapper.find(H7);
        expect(header).toHaveLength(1);
        var tiles = wrapper.find(Tile);
        expect(tiles).toHaveLength(2);
    });
});
//# sourceMappingURL=RadioCardTypeQuestion.test.js.map