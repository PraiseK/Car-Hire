using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarHire.Migrations
{
    /// <inheritdoc />
    public partial class AddRoleIntoUserTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UsersId",
                table: "Role",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Role_UsersId",
                table: "Role",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Role_Users_UsersId",
                table: "Role",
                column: "UsersId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Role_Users_UsersId",
                table: "Role");

            migrationBuilder.DropIndex(
                name: "IX_Role_UsersId",
                table: "Role");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "Role");
        }
    }
}
