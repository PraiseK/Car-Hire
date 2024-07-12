using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarHire.Migrations
{
    /// <inheritdoc />
    public partial class AddMoreAttributeToTheVehicleTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<bool>(
                name: "AC",
                table: "Vehicle",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Doors",
                table: "Vehicle",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DrivingAge",
                table: "Vehicle",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Vehicle",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SuitCases",
                table: "Vehicle",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "PhoneNumber",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AC",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "Doors",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "DrivingAge",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "SuitCases",
                table: "Vehicle");

            migrationBuilder.AlterColumn<int>(
                name: "PhoneNumber",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

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
    }
}
