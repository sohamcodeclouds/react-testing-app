import { dummyCommentsData } from './DummyData'
import { render, screen, waitFor } from '@testing-library/react'
import Comments from './Comments'
import axios from 'axios'

jest.mock('axios')

describe('Mock data test', () => {
  it('comment list', async () => {
    axios.get.mockResolvedValue({ data: dummyCommentsData })
    render(<Comments />)

    const commentList = await waitFor(() => screen.findAllByTestId('comment'))

    expect(commentList).toHaveLength(1)
  })
})
