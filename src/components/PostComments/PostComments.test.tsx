import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PostComments from '../PostComments';



describe('Teste para o componente PostComments', () => {
    it('Deve adicionar dois comentários', async () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        await userEvent.type(textarea, 'Primeiro comentário');
        await userEvent.click(button);
        await screen.findByText('Primeiro comentário'); // Garante que está no DOM

        await userEvent.type(textarea, 'Segundo comentário');
        await userEvent.click(button);
        await screen.findByText('Segundo comentário');

        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
    });
});
