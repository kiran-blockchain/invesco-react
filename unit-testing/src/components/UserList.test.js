import { cleanup, render } from "@testing-library/react";
import { UserList } from "./UserList";
import mockAxios from 'axios'
afterEach(cleanup);

jest.mock('axios');

/**
 * __mocks__ : mock data directory
 */

describe('UserList Component', () => {
    test('fetch successfully data from an api', () => {
        render(<UserList />);
        const response = [{ data: [{ id: 100, username: 'Leanne Graham', email: 'leanne@gmail.com', phone: 54614612152 }] }]
        mockAxios.get.mockResolvedValue(response)
    })

    
});