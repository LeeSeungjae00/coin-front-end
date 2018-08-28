import { QueryClient, QueryClientProvider } from 'react-query';
import React from "react";
import { useGetCoinState } from '../queryHooks';
import { getCoinState } from '../../api/coinApi';
import { renderHook } from '@testing-library/react-hooks/lib/pure';
import nock from 'nock/types';


describe('react query custom hook test', () => {
    describe('getCoinState Test', () => {
        it('check call one time getCoinState', async () => {
            const queryClient = new QueryClient();
            const wrapper = ({ children }: any) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            );
            const expectation = nock('localhost')
                .get('/coinState')
                .reply(200, {
                    answer: 42
                });
            const { result, waitFor } = renderHook(() => useGetCoinState("BTC-KOR"), { wrapper });
            await waitFor(() => {
                return result.current.isSuccess
            })
            expect(result.current.data).toEqual({ answer: 42 })

        })
    })

})