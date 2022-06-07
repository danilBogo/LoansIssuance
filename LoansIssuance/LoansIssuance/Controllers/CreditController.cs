using LoansIssuance.Dto;
using LoansIssuance.Services;
using Microsoft.AspNetCore.Mvc;

namespace LoansIssuance.Controllers;

[ApiController]
[Route("credit")]
public class CreditController : ControllerBase
{
    private readonly CreditService _creditService;

    public CreditController(CreditService creditService)
    {
        _creditService = creditService;
    }
    
    [HttpPost("take")]
    public IActionResult TakeCredit([FromBody] CreditDto creditDto)
    {
        var result = _creditService.GetCreditResult(creditDto);
        return Ok(result);
    }
}