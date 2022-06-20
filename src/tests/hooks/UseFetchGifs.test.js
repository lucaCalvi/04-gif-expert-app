import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Prueba en UseFetchGifs', () => {

    test('Debe de retornar el estado inicial', async () => {

        const category = 'One Punch';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );
        
        const { data, loading } = result.current;

        // const { data:images, loading } = useFetchGifs(category);

        await waitForNextUpdate();

        expect(data).toEqual([]);

        expect(loading).toBe(true);

    });

    test('Debe retornar un arreglo de imagenes y loading en false', async () => {

        const category = 'One Punch';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);

        expect(loading).toBe(false);

    });

});