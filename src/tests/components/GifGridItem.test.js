import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests de compontente GifGridItem', () => {

    const title = 'The Simpsons';
    const url = 'https://localhost:8080/simpsons.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Comprueba que el componente funciona', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el titulo', () => { 

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => { 
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);

    });

});