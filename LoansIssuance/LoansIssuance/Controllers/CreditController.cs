using LoansIssuance.Dto;
using Microsoft.AspNetCore.Mvc;

namespace LoansIssuance.Controllers;

[ApiController]
[Route("credit")]
public class CreditController : ControllerBase
{
    [HttpPost("dicks")]
    public IActionResult GetDicks([FromBody] DickDto dickDto) =>
        new JsonResult(new
        {
            nazvanie =
                $"Hey {dickDto.Name} {dickDto.Surname} {dickDto.Patronymic} these dicks for you 8====D 8====D 8====D"
        });
}