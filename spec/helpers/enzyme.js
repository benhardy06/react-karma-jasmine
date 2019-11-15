import jasmineEnzyme from 'jasmine-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});

export * from 'enzyme';