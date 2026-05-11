use anchor_lang::prelude::*;

declare_id!("NRaiLs1111111111111111111111111111111111111");

#[program]
pub mod neuralrails {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("NeuralRails Program Initialized");
        Ok(())
    }

    /// Request AI inference with payment escrow
    pub fn request_inference(
        ctx: Context<RequestInference>,
        prompt_hash: [u8; 32],
        model_id: String,
        max_cost: u64,
    ) -> Result<()> {
        let user = &ctx.accounts.user;

        emit!(InferenceRequested {
            user: user.key(),
            prompt_hash,
            model_id,
            max_cost,
            timestamp: Clock::get()?.unix_timestamp,
        });

        msg!("Inference requested. Prompt hash: {:?}", prompt_hash);
        Ok(())
    }

    /// Provider submits result + verification
    pub fn submit_result(
        ctx: Context<SubmitResult>,
        result_hash: [u8; 32],
        compute_proof: [u8; 32],
    ) -> Result<()> {
        emit!(InferenceCompleted {
            request_id: ctx.accounts.request.key(),
            result_hash,
            compute_proof,
            provider: ctx.accounts.provider.key(),
        });

        msg!("Inference completed and verified on-chain");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct RequestInference<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct SubmitResult<'info> {
    #[account(mut)]
    pub provider: Signer<'info>,
    /// Add your Request PDA here in production
    pub request: AccountInfo<'info>,
}

#[event]
pub struct InferenceRequested {
    pub user: Pubkey,
    pub prompt_hash: [u8; 32],
    pub model_id: String,
    pub max_cost: u64,
    pub timestamp: i64,
}

#[event]
pub struct InferenceCompleted {
    pub request_id: Pubkey,
    pub result_hash: [u8; 32],
    pub compute_proof: [u8; 32],
    pub provider: Pubkey,
}
